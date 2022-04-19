function at(list, pos){
    if (pos>=0){
        return list[pos]
    }
    else if (pos<0){
        return list[list.length+pos]
    }
}