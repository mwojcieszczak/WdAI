const Goodbye = ({ name }) => {
    const letter = (name.slice(-1) == 'a') ? 'K' : 'M'
    return (<h1>Bye, {name} {letter}</h1>)
}

export default Goodbye