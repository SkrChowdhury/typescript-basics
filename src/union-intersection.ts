type NoobDeveloper ={
    name: string
}

type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number
}

enum Level{
    junior='junior',mid='mid',senior='senior'
}

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    level:'junior' | 'mid' | 'senior'
}

const newDeveloper : NoobDeveloper | JuniorDeveloper ={
    name: "Moznu Mia",
    expertise:'JavaScript',
    experience:6
}

const developer: NextLevelDeveloper ={
    name:'Next Bhai',
    expertise:'TypeScript',
    experience:2,
    leadershipExperience:1,
    // level:Level.mid
    level:'mid'
}