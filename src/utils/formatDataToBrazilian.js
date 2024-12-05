const FormatDateToBrazilian = (dateString) => {
    const date = new Date(dateString);

    const formattedDate = date.toLocaleDateString('pt-BR');

    return formattedDate;
};

export default FormatDateToBrazilian