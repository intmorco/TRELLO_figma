export function reload(arr, component, places, isContainer = false){
    places.forEach(el => el.innerHTML = "")

    for(let item of arr){
        const elem = component(item)

        places[isContainer ? 0 : item.status].append(elem)
    }
}