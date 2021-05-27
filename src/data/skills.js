const slugify = require("slugify");

const computePermalink = (skill) => {
    return `/gestes/${slugify(skill.id, { strict: true })}/`;
};

const skills = [
    {
        id: "macaroner",
        title: "Macaroner",
        content: "Bla bla bla",
    },
];

module.exports = skills.map((skill) =>
    Object.assign(skill, { permalink: computePermalink(skill) })
);
