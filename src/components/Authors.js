import authorsGlobal from "js-yaml-loader!../../docs/authors.yml";
import React from "react";

export default function Authors({ authors }) {
  if (!authors || authors.length === 0) {
    return null;
  }

  const filteredAuthors = authors
    .map((authorKey) => {
      const authorData = authorsGlobal[authorKey];
      if (!authorData) {
        console.warn(`Author key "${authorKey}" not found in authors.yml`);
        return null;
      }
      return {
        key: authorKey,
        ...authorData,
      };
    })
    .filter(Boolean);

  if (filteredAuthors.length === 0) {
    return null;
  }

  const totalAuthors = filteredAuthors.length;

  const AVATAR_SIZE = 48;
  const OVERLAP_MARGIN = -(AVATAR_SIZE / 4);

  const avatarStyle = {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: "50%",
    border: "1px solid var(--ifm-color-white, white)",
    cursor: "pointer",
    objectFit: "cover",
  };

  const avatarContainerStyle = {
    display: "flex",
    paddingLeft: Math.abs(OVERLAP_MARGIN),
  };

  const mainContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    float: "right",
    clear: "both",
  };

  return (
    <div style={mainContainerStyle}>
      <small>
        {totalAuthors} {totalAuthors > 1 ? "contributeurs" : "contributeur"}
      </small>

      <div style={avatarContainerStyle}>
        {filteredAuthors.map((author, i) => (
          <a
            key={i}
            href={author.url}
            target={"_blank"}
            rel="noopener noreferrer"
            title={author.name}
            style={i > 0 ? { marginLeft: OVERLAP_MARGIN } : {}}
          >
            <img src={author.image_url} alt={author.name} style={avatarStyle} />
          </a>
        ))}
      </div>
    </div>
  );
}
