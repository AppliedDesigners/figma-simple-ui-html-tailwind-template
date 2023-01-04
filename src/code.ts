type FormValues = {
  [key: string]: string
}

interface IMessageInput {
  type: string,
  value: FormValues
}

const submitForm = async (value: FormValues) => {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" })
  
  const frame = figma.createFrame()
  frame.name = `Form: ${new Date().toLocaleString()}`
  frame.fills = []

  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      if (value[key]) {
        const textNode = figma.createText()
        textNode.name = key
        textNode.characters = value[key]
        /**
         * Note: rather than do a manual incremental layout like
         * - textNode.y = 20 * valIx
         * We delegate the layout responsibility to the frame and leverage it's auto-layout attributes
         */
        frame.appendChild(textNode)  
      }
    }
  }
  
  /**
   * Set the auto layout properties of the Frame
   */
  frame.layoutGrow = 1
  frame.layoutMode = "VERTICAL"
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'AUTO'
  frame.itemSpacing = 10
  
  figma.viewport.scrollAndZoomIntoView([frame]);
}

figma.showUI(__html__, { height: 600 })

figma.ui.onmessage = async ({ type, value }: IMessageInput) => {
  if (type === 'submit') {
    await submitForm(value as FormValues)
    figma.closePlugin()
  } else if (type === 'cancel') {
    figma.closePlugin()
  } else {
    figma.notify(`Unsupported type: ${type}`, {error: true})
  }
}