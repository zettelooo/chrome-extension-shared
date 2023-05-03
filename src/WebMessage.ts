export type WebMessage<T extends WebMessage.SubType = WebMessage.SubType> = {
  [WebMessage.SubType.ToContentScriptSetThemeType]: {
    readonly type: typeof WebMessage.TYPE
    readonly subType: WebMessage.SubType.ToContentScriptSetThemeType
    readonly themeType: WebMessage.ThemeType
  }
  [WebMessage.SubType.ToContentScriptGetCurrentUrl]: {
    readonly type: typeof WebMessage.TYPE
    readonly subType: WebMessage.SubType.ToContentScriptGetCurrentUrl
  }
  [WebMessage.SubType.FromContentScriptSetCurrentUrl]: {
    readonly type: typeof WebMessage.TYPE
    readonly subType: WebMessage.SubType.FromContentScriptSetCurrentUrl
    readonly url: string
    readonly title?: string
    readonly favIconUrl?: string
  }
  [WebMessage.SubType.FromContentScriptDragControl]: {
    readonly type: typeof WebMessage.TYPE
    readonly subType: WebMessage.SubType.FromContentScriptDragControl
    readonly event: 'drag start' | 'drag end'
  }
  [WebMessage.SubType.FromContentScriptDragEvent]: {
    readonly type: typeof WebMessage.TYPE
    readonly subType: WebMessage.SubType.FromContentScriptDragEvent
    readonly eventType: 'dragenter' | 'dragleave' | 'dragover' | 'drop'
    readonly x: number
    readonly y: number
    readonly serializedDataTransfer: string | null
  }
}[T]

export namespace WebMessage {
  export const TYPE = 'CHROME_EXTENSION' // TODO: Needs to come from somewhere more global, like a general Message API handling module

  export enum SubType {
    ToContentScriptSetThemeType = 'TO_CONTENT_SCRIPT_SET_THEME_TYPE',
    ToContentScriptGetCurrentUrl = 'TO_CONTENT_SCRIPT_GET_CURRENT_URL',
    FromContentScriptSetCurrentUrl = 'FROM_CONTENT_SCRIPT_SET_CURRENT_URL',
    FromContentScriptDragControl = 'FROM_CONTENT_SCRIPT_DRAG_CONTROL',
    FromContentScriptDragEvent = 'FROM_CONTENT_SCRIPT_DRAG_EVENT',
  }

  export type ThemeType = 'light' | 'dark'

  export function serializeDataTransfer(dataTransfer: DataTransfer): string {
    const dataItemsByFormat: Record<string, string> = {}
    dataTransfer.types.forEach(format => {
      dataItemsByFormat[format] = dataTransfer.getData(format)
    })
    const serializedDataTransfer = JSON.stringify(dataItemsByFormat)
    return serializedDataTransfer
  }

  export function deserializeDataTransfer(serializedDataTransfer: string): DataTransfer {
    const dataItemsByFormat: Record<string, string> = JSON.parse(serializedDataTransfer)
    const dataTransfer = new DataTransfer()
    Object.keys(dataItemsByFormat).forEach(format => dataTransfer.setData(format, dataItemsByFormat[format]))
    return dataTransfer
  }
}
