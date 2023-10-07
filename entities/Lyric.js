module.exports = (Lyric) => {

  let newLyric = { 
    title: Lyric.title,
    description: Lyric.description,
    author: Lyric.author,
    ref_link: Lyric.ref_link,
    uploaded_by: Lyric.uploaded_by,
    updatedBy: Lyric.updatedBy,
    isActive: Lyric.isActive,
    createdAt: Lyric.createdAt,
    updatedAt: Lyric.updatedAt,
    isDeleted: Lyric.isDeleted,
    download_url: Lyric.download_url,
  };

  // remove undefined values
  Object.keys(newLyric).forEach(key => newLyric[key] === undefined && delete newLyric[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newLyric) => {
   *   if (!newLyric.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newLyric) 
   */

  return Object.freeze(newLyric);
};
