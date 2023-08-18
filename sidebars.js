/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    'intro',
    'activities',
    {
      type: 'category',
      label: '프로젝트',
      link: {
        type: 'doc',
        id: 'projects',
      },
      // link: {
      //     type: "generated-index",
      //     description: "SPARCS에서 진행중인 프로젝트입니다.",
      //     slug: "projects",
      // },
      items: [{ type: 'autogenerated', dirName: 'projects' }],
    },
    {
      type: 'category',
      label: '세미나',
      link: {
        type: 'doc',
        id: 'seminars',
      },
      items: [{ type: 'autogenerated', dirName: 'seminars' }],
    },
    {
      type: 'category',
      label: '규칙',
      link: {
        type: 'doc',
        id: 'rules',
      },
      items: [{ type: 'autogenerated', dirName: 'rules' }],
    },
    'contact',
  ],
}

module.exports = sidebars
