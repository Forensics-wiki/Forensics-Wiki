export const readmeSorter = (infoA, infoB) => {
    if (infoA.type === "file" &&
        (infoA.path === "README.md" || infoA.path === "readme.md"))
        return -1;
    if (infoB.type === "file" &&
        (infoB.path === "README.md" || infoB.path === "readme.md"))
        return 1;
    return 0;
};
export const orderSorter = (infoA, infoB) => {
    // itemA order is absent
    if (infoA.order === null) {
        // both item do not have orders
        if (infoB.order === null)
            return 0;
        // itemA order is absent while itemB order is present
        return infoB.order;
    }
    // itemA order is present while itemB order is absent
    if (infoB.order === null)
        return -infoA.order;
    // now we are sure both order exist
    // itemA order is positive
    if (infoA.order > 0) {
        // both order are negative
        if (infoB.order > 0)
            return infoA.order - infoB.order;
        // infoA.order is positive while infoB.order is negative
        return -1;
    }
    // both order are negative
    if (infoB.order < 0)
        return infoA.order - infoB.order;
    // infoA.order is negative while infoB.order is positive
    return 1;
};
export const dateSorter = (infoA, infoB) => {
    if (infoA.frontmatter.date instanceof Date) {
        if (infoB.frontmatter.date instanceof Date)
            return (infoA.frontmatter.date.getTime() - infoB.frontmatter.date.getTime());
        return -1;
    }
    if (infoB.frontmatter.date instanceof Date)
        return 1;
    return 0;
};
export const dateDescSorter = (infoA, infoB) => {
    if (infoA.frontmatter.date instanceof Date) {
        if (infoB.frontmatter.date instanceof Date)
            return (infoB.frontmatter.date.getTime() - infoA.frontmatter.date.getTime());
        return -1;
    }
    if (infoB.frontmatter.date instanceof Date)
        return 1;
    return 0;
};
const getFilename = (info) => info.type === "file"
    ? info.path.replace(/\.md$/, "")
    : info.info.prefix.replace(/\/$/, "");
export const filenameSorter = (infoA, infoB) => getFilename(infoA).localeCompare(getFilename(infoB));
export const fileNumberSorter = (infoA, infoB) => {
    const [, filenameA, fileANumber] = /^(.*?)(\d*)?$/.exec(getFilename(infoA));
    const [, filenameB, fileBNumber] = /^(.*?)(\d*)?$/.exec(getFilename(infoB));
    const result = filenameA.localeCompare(filenameB);
    if (result)
        return result;
    return Number(fileANumber) - Number(fileBNumber);
};
export const fileNumberDescSorter = (infoA, infoB) => {
    const [, filenameA, fileANumber] = /^(.*?)(\d*)?$/.exec(getFilename(infoA));
    const [, filenameB, fileBNumber] = /^(.*?)(\d*)?$/.exec(getFilename(infoB));
    const result = filenameA.localeCompare(filenameB);
    if (result)
        return result;
    return Number(fileBNumber) - Number(fileANumber);
};
const getTitle = (info) => info.type === "dir" ? info.info.text : info.title;
export const titleSorter = (infoA, infoB) => getTitle(infoA).localeCompare(getTitle(infoB));
export const titleNumberSorter = (infoA, infoB) => {
    const [, titleA, titleANumber] = /^(.*?)(\d*)?$/g.exec(getTitle(infoA));
    const [, titleB, titleBNumber] = /^(.*?)(\d*)?$/g.exec(getTitle(infoB));
    const result = titleA.localeCompare(titleB);
    if (result)
        return result;
    return Number(titleANumber) - Number(titleBNumber);
};
export const titleNumberDescSorter = (infoA, infoB) => {
    const [, titleA, titleANumber] = /^(.*?)(\d*)?$/.exec(getTitle(infoA));
    const [, titleB, titleBNumber] = /^(.*?)(\d*)?$/.exec(getTitle(infoB));
    const result = titleA.localeCompare(titleB);
    if (result)
        return result;
    return Number(titleBNumber) - Number(titleANumber);
};
const sortKeyMap = {
    readme: readmeSorter,
    order: orderSorter,
    date: dateSorter,
    "date-desc": dateDescSorter,
    filename: filenameSorter,
    "file-number": fileNumberSorter,
    "file-number-desc": fileNumberDescSorter,
    title: titleSorter,
    "title-number": titleNumberSorter,
    "title-number-desc": titleNumberDescSorter,
};
const availableKeywords = Object.keys(sortKeyMap);
export const getSorter = (sorter) => {
    if (typeof sorter === "string" && availableKeywords.includes(sorter))
        return [sortKeyMap[sorter]];
    if (Array.isArray(sorter))
        return sorter
            .filter((sorterKey) => availableKeywords.includes(sorterKey))
            .map((sorterKey) => sortKeyMap[sorterKey]);
    if (typeof sorter === "function")
        return [sorter];
    return [readmeSorter, orderSorter, titleSorter];
};
//# sourceMappingURL=sorter.js.map