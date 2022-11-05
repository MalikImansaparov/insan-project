import sanitize from "sanitize-html";

export const Sanitized = ({ html = "" }) => {
    const sanitized = sanitize(html);
    return <span dangerouslySetInnerHTML={{ __html: sanitized }} />;
};