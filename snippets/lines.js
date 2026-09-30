// quebras manuais do Figma: [d] só no desktop, [m] só no mobile, [dm] nos dois
export default function lines(text) {
  return text.split(/\[(dm|d|m)\]/).map((part, i) => {
    if (i % 2 === 0) return part;
    return <br key={i} className={part === 'd' ? 'br-desktop' : part === 'm' ? 'br-mobile' : undefined} />;
  });
}
