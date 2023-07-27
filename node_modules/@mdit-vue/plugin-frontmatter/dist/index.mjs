import grayMatter from 'gray-matter';

const frontmatterPlugin = (md, { grayMatterOptions, renderExcerpt = true } = {}) => {
  const render = md.render.bind(md);
  md.render = (src, env = {}) => {
    const { data, content, excerpt = "" } = grayMatter(src, grayMatterOptions);
    env.content = content;
    env.frontmatter = {
      // allow providing default value
      ...env.frontmatter,
      ...data
    };
    env.excerpt = renderExcerpt && excerpt ? (
      // render the excerpt with original markdown-it render method.
      // here we spread `env` to avoid mutating the original object.
      // using deep clone might be a safer choice.
      render(excerpt, { ...env })
    ) : (
      // use the raw excerpt directly
      excerpt
    );
    return render(content, env);
  };
};

export { frontmatterPlugin };
