import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '创建目的',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        我们创建Forensics-Wiki的目的就是为国内的取证者，提供这么一个可学习的平台，帮助国内取证者提升自己的技术。当时这个项目也是永久免费无偿的。
      </>
    ),
  },
  {
    title: '如何贡献？',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        你可以前往Github的仓库：<a href="https://github.com/Forensics-wiki/Forensics-Wiki">Forensics-wiki/Forensics-Wiki</a> 通过pr的方式，对该项目做出贡献，当成功pr后，会自动同步部署到<code>forensics-wiki.com</code>。
      </>
    ),
  },
  {
    title: '相关群聊',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        我们已为本项目创建了一个Q群：<a href="https://jq.qq.com/?_wv=1027&k=8DFUxYyK">286152000</a> 欢迎各位师傅们进群一同编写交流。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
