console.log('Test pop')

{
    console.log('Case')

    const verdura = ["brocoli", "pimiento", "patata", "berenjena"]

    const remove = pop(verdura)

    console.assert(remove === "berenjena")
    console.assert(verdura.length === 3)
}