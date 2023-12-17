const person = {
    name: 'Hyeyeon',
    address: {
        line1: 'Baker Street',
        city: 'london',
        country: 'UK'
    },
    profiles: ['instagram', 'linkedin', 'twitter'],
    printProfile: () => printProfile()
}

function printProfile() {
    person.profiles.map(
        profile => console.log(profile)
    )
}

export default function LearningJavaScript(){
    return(
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile}</div>
        </>
    )
}