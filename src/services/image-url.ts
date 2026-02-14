const getCroppedImageUrl = (url: string) => {
  if (!url) return '';
  
  const target = 'media/';
  const index = url.indexOf(target);
  
  // If URL doesn't contain 'media/' or is external, return as is
  if (index === -1) return url;

  // Insert cropping parameters after 'media/'
  const insertionPoint = index + target.length;
  return url.slice(0, insertionPoint) + 'crop/600/400/' + url.slice(insertionPoint);
}

export default getCroppedImageUrl;
