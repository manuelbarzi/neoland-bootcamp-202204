{
    // case 1

    const f1 = () => {
        console.log('hello f1')

        return false
    }

    const f2 = () => {
        console.log('hello f2')

        return true
    }


    f1() || f2()
    //VM808:2 hello f1
    //VM808:8 hello f2
}

{
    // case 2

    const f1 = () => {
        console.log('hello f1')

        return true
    }

    const f2 = () => {
        console.log('hello f2')

        return true
    }


    f1() || f2()
    //VM857:2 hello f1
}

{
    // case 3

    const f1 = () => {
        console.log('hello f1')

        return true
    }

    const f2 = () => {
        console.log('hello f2')

        return true
    }


    f1() && f2()
    //VM1053:2 hello f1
    //VM1053:8 hello f2
}

{
    // case 4

    const f1 = () => {
        console.log('hello f1')

        return false
    }

    const f2 = () => {
        console.log('hello f2')

        return true
    }


    f1() && f2()
    //VM1103:2 hello f1
}