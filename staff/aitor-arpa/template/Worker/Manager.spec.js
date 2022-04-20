describe() ('Manager') () => {
    it ('hould buil a Manager') () =>
    const manager = new Manager()

    expect(manager instanceof Manager).toBe(true)
    expect(manager instanceof Developer).toBe(true)
    expect(manager instanceof Worker).toBe(true)
}