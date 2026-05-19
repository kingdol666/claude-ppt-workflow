#!/usr/bin/env node
/**
 * check-deps.js — ppt-auto-builder 依赖检查
 *
 * 本技能是编排器，不亲自生图、不亲自构建PPTX。
 * 因此只检查两个委托技能 + 两个npm包是否可用。
 *
 * 用法：
 *   node scripts/check-deps.js
 *   node scripts/check-deps.js --json
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const HOME = os.homedir();
const SKILLS_DIR = path.join(HOME, '.claude', 'skills');
const jsonMode = process.argv.includes('--json');

const results = {
  ok: true,
  skills_dir: SKILLS_DIR,
  huashu_slides: { installed: false, html2pptx: false },
  gpt_image_2: { installed: false, generate: false, mode: 'unknown' },
  pptxgenjs: false,
  playwright: false,
  sharp: false,
  errors: [],
};

// 1. huashu-slides
const hsDir = path.join(SKILLS_DIR, 'huashu-slides');
if (fs.existsSync(path.join(hsDir, 'SKILL.md'))) {
  results.huashu_slides.installed = true;
  results.huashu_slides.html2pptx = fs.existsSync(
    path.join(hsDir, 'scripts', 'html2pptx.js')
  );
} else {
  results.ok = false;
  results.errors.push(
    'huashu-slides 未安装。安装: claude install-skill https://github.com/alchaincyf/huashu-skills/tree/master/huashu-slides'
  );
}

// 2. gpt-image-2
const giDir = path.join(SKILLS_DIR, 'gpt-image-2');
if (fs.existsSync(path.join(giDir, 'SKILL.md'))) {
  results.gpt_image_2.installed = true;
  results.gpt_image_2.generate = fs.existsSync(
    path.join(giDir, 'scripts', 'generate.js')
  );

  // Detect mode (A/B/C)
  const checkModePath = path.join(giDir, 'scripts', 'check-mode.js');
  if (fs.existsSync(checkModePath)) {
    try {
      const { execSync } = require('child_process');
      const out = execSync(`node "${checkModePath}" --json 2>&1`, {
        encoding: 'utf8',
        timeout: 10000,
      });
      const m = JSON.parse(out);
      results.gpt_image_2.mode = m.mode || 'unknown';
    } catch {
      // keep unknown
    }
  }
} else {
  results.ok = false;
  results.errors.push(
    'gpt-image-2 未安装。安装: claude install-skill https://github.com/ConardLi/garden-skills/tree/main/skills/gpt-image-2'
  );
}

// 3. pptxgenjs (needed by huashu-slides html2pptx)
try {
  require.resolve('pptxgenjs', { paths: [process.cwd()] });
  results.pptxgenjs = true;
} catch {
  try {
    require.resolve('pptxgenjs', {
      paths: [path.join(process.cwd(), 'ppt_workspace')],
    });
    results.pptxgenjs = true;
  } catch {
    results.pptxgenjs = false;
    results.ok = false;
    results.errors.push('pptxgenjs 未安装。运行: npm install pptxgenjs');
  }
}

// 4. playwright (needed by huashu-slides html2pptx)
try {
  require.resolve('playwright', { paths: [process.cwd()] });
  results.playwright = true;
} catch {
  try {
    require.resolve('playwright', {
      paths: [path.join(process.cwd(), 'ppt_workspace')],
    });
    results.playwright = true;
  } catch {
    results.playwright = false;
    results.ok = false;
    results.errors.push('playwright 未安装。运行: npm install playwright');
  }
}

// 5. sharp (needed by html2pptx.js for image processing)
try {
  require.resolve('sharp', { paths: [process.cwd()] });
  results.sharp = true;
} catch {
  try {
    require.resolve('sharp', {
      paths: [path.join(process.cwd(), 'ppt_workspace')],
    });
    results.sharp = true;
  } catch {
    results.sharp = false;
    results.ok = false;
    results.errors.push('sharp 未安装。运行: npm install sharp');
  }
}

// Output
if (jsonMode) {
  console.log(JSON.stringify(results, null, 2));
} else {
  console.log('=== ppt-auto-builder 依赖检查 ===\n');
  console.log(`技能目录: ${results.skills_dir}\n`);

  const icon = (b) => (b ? '✅' : '❌');
  console.log(
    `[huashu-slides] ${icon(results.huashu_slides.installed)} 已安装  html2pptx: ${icon(results.huashu_slides.html2pptx)}`
  );
  console.log(
    `[gpt-image-2]   ${icon(results.gpt_image_2.installed)} 已安装  generate.js: ${icon(results.gpt_image_2.generate)}  模式: ${results.gpt_image_2.mode}`
  );
  console.log(`[pptxgenjs]    ${icon(results.pptxgenjs)}`);
  console.log(`[playwright]   ${icon(results.playwright)}`);
  console.log(`[sharp]        ${icon(results.sharp)}`);

  if (results.errors.length) {
    console.log('\n⚠️  缺失依赖:');
    results.errors.forEach((e) => console.log(`  - ${e}`));
  } else {
    console.log('\n✅ 所有依赖就绪，可以开始制作PPT！');
  }
}

process.exit(results.ok ? 0 : 1);
