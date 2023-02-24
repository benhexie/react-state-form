const otherElements = (tag, props, children) => {
    if (tag === 'a') return <a {...props}>{children}</a>
    else if (tag === 'abbr') return <abbr {...props}>{children}</abbr>
    else if (tag === 'article') return <article {...props}>{children}</article>
    else if (tag === 'b') return <b {...props}>{children}</b>
    else if (tag === 'bdi') return <bdi {...props}>{children}</bdi>
    else if (tag === 'blockquote') return <blockquote {...props}>{children}</blockquote>
    else if (tag === 'br') return <br />
    else if (tag === 'cite') return <cite {...props}>{children}</cite>
    else if (tag === 'code') return <code {...props}>{children}</code>
    else if (tag === 'div') return <div {...props}>{children}</div>
    else if (tag === 'del') return <del {...props}>{children}</del>
    else if (tag === 'dfn') return <dfn {...props}>{children}</dfn>
    else if (tag === 'em') return <em {...props}>{children}</em>
    else if (tag === 'h1') return <h1 {...props}>{children}</h1>
    else if (tag === 'h2') return <h2 {...props}>{children}</h2>
    else if (tag === 'h3') return <h3 {...props}>{children}</h3>
    else if (tag === 'h4') return <h4 {...props}>{children}</h4>
    else if (tag === 'h5') return <h5 {...props}>{children}</h5>
    else if (tag === 'h6') return <h6 {...props}>{children}</h6>
    else if (tag === 'i') return <i {...props}>{children}</i>
    else if (tag === 'iframe') return <iframe {...props}>{children}</iframe>
    else if (tag === 'img') return <img {...props}>{children}</img>
    else if (tag === 'ins') return <ins {...props}>{children}</ins>
    else if (tag === 'kbd') return <kbd {...props}>{children}</kbd>
    else if (tag === 'mark') return <mark {...props}>{children}</mark>
    else if (tag === 'meter') return <meter {...props}>{children}</meter>
    else if (tag === 'ol') return <ol {...props}>{children}</ol>
    else if (tag === 'p') return <p {...props}>{children}</p>
    else if (tag === 'param') return <param {...props}>{children}</param>
    else if (tag === 'picture') return <picture {...props}>{children}</picture>
    else if (tag === 'pre') return <pre {...props}>{children}</pre>
    else if (tag === 'progress') return <progress {...props}>{children}</progress>
    else if (tag === 'rp') return <rp {...props}>{children}</rp>
    else if (tag === 'rt') return <rt {...props}>{children}</rt>
    else if (tag === 'ruby') return <ruby {...props}>{children}</ruby>
    else if (tag === 's') return <s {...props}>{children}</s>
    else if (tag === 'samp') return <samp {...props}>{children}</samp>
    else if (tag === 'section') return <section {...props}>{children}</section>
    else if (tag === 'small') return <small {...props}>{children}</small>
    else if (tag === 'source') return <source {...props}>{children}</source>
    else if (tag === 'span') return <span {...props}>{children}</span>
    else if (tag === 'strong') return <strong {...props}>{children}</strong>
    else if (tag === 'sub') return <sub {...props}>{children}</sub>
    else if (tag === 'summary') return <summary {...props}>{children}</summary>
    else if (tag === 'svg') return <svg {...props}>{children}</svg>
    else if (tag === 'table') return <table {...props}>{children}</table>
    else if (tag === 'template') return <template {...props}>{children}</template>
    else if (tag === 'time') return <time {...props}>{children}</time>
    else if (tag === 'title') return <title {...props}>{children}</title>
    else if (tag === 'u') return <u {...props}>{children}</u>
    else if (tag === 'ul') return <ul {...props}>{children}</ul>
    else if (tag === 'var') return <var {...props}>{children}</var>
    else if (tag === 'video') return <video {...props}>{children}</video>
    else if (tag === 'wbr') return <wbr {...props}>{children}</wbr>

    return null
}

export default otherElements