export const downloadFile = async (url) => {
    fetch('http://www.africau.edu/images/default/sample.pdf', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/pdf',
            //multipart/form-data
        },
    })
        .then((response) => response.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.download = "doc";
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        });
}