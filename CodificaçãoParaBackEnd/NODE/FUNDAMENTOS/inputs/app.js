// inquirer@8.1.0

const colors = require("colors")
const inquirer = require("inquirer")

inquirer
    .prompt([
        {
            name: 'p1',
            message: 'qual a primeira nota'
        },
        {
            name: 'p2',
            message: 'qual a segunda nota'
        },
    ])
    .then((aswers)=>{
        console.log(aswers)
        const media = (Number(aswers.p1) + Number(aswers.p2))/2

        if(media>+6){
            console.log(`Aluno aprovado com média ${media}`.bgGreen)
        }
        else(
            console.log(`Aluno reprovado com media ${media}`.rainbow)
        )
    })
    .catch(err=>console.error(err))