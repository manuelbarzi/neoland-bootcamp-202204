Fakay.prototype.splice = function (index, deleteCount, ...newElements) {
	const deletedElements = []

	if (deleteCount === 1) {
		deletedElements[0] = this[index]

		for (let i = index; i < this.length - 1; i++)
			this[i] = this[i + 1]

		// this.length = this.length - 1
		// this.length -= 1
		this.length--
	} else if (deleteCount > 1) {
		for (let i = 0; i < deleteCount; i++)
			deletedElements[i] = this[index + i]

		for (let i = index; i < this.length - deleteCount; i++)
			this[i] = this[i + deleteCount]

		// this.length = this.length - deleteCount
		this.length -= deleteCount
	}

	if (newElements.length === 1) {
		for (let i = this.length - 1; i >= index; i--)
			this[i + 1] = this[i]

		this[index] = newElements[0]
	} else if (newElements.length > 1) {
		for (let i = this.length - 1; i >= index; i--)
			this[i + newElements.length] = this[i]

		for (let i = 0; i < newElements.length; i++)
			this[index + i] = newElements[i]
	}

	return deletedElements
}