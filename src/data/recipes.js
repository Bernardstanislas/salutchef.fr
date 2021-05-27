const skills = require("./skills");

const getSkillPermalink = (id) =>
    skills.find((skill) => skill.id === id).permalink;

module.exports = [
    {
        title: "Macarons à l'ancienne",
        content: `Macarons, il faut [macaroner](${getSkillPermalink(
            "macaroner"
        )})`,
    },
    {
        title: "Croute au vin",
        content: "Croute avec du vin",
    },
];
