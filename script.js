/* for(let x = 0; x < topics.length; x++);
    console.log(topics[x]); */
let x = 0;
function listTopics() {
    for (let x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}
const topics = ["HTML", "CSS", "Git", "JavaScript"];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git");
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript");
    } else {
        console.log("Please try again");
    }
}
/*
const shapes = ["triangle", "square", "pentagon", "circle"];
    for(let x = 0; x < shapes.length; x++)
        console.log(shapes[x]);
*/
console.log('Here are the topics we learned through the prework');
listTopics()
console.log('Which topic should we study first?');
selectTopic()