export const obtenerStateStorage = () => {
    const citasStorage = localStorage.getItem('citas');
    if(citasStorage === null){
        return undefined
    }
    return JSON.parse(citasStorage)
}

export const guardarStateStorage = state => {
    const citasStorage = JSON.strigify(state);
    localStorage.setItem('citas', citasStorage)
}