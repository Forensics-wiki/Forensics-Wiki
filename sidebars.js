/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-nocheck

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  base: [
    {
      type: 'category',
      label: '取证基础',
      items: ['forensics-base/index',
              'forensics-base/sha',
              'forensics-base/veracrypt',
              'forensics-base/file',
              'forensics-base/img'],
    },
  ],
    jiami: [
    {
      type: 'category',
      label: '加密与解密',
      items: ['forensics-jiami/index',
              'forensics-jiami/efs',
              'forensics-jiami/bitlocker'],
    },
  ],
    volatility: [
    {
      type: 'category',
      label: '内存取证',
      items: ['forensics-volatility/index',
              'forensics-volatility/base'],
    },
  ],
  
};

module.exports = sidebars;
