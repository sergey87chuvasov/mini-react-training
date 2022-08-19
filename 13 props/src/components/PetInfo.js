function PetInfo(props) {
    // в начале можно делать деструктуризацию
    const {animal, age} = props

    // console.log(props);

    // return <h1>My {props.animal} is {props.age} years old</h1>

    return <h1>My {animal} is {age} years old</h1>
}

export default PetInfo


// можно делать деструктаризацию и вв начале блока 
