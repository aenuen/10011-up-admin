import printJS from 'print-js'

/**
 * @description 打印表格
 * @param {style} tableId
 * @param {style} headTitle
 * @param {style} [style]
 * @param {style} [headerStyle]
 */
export const printTable = (tableId:string, headTitle:string, style?:string, headerStyle?:string) => {
  style = style || 'table tr td,th{border-collapse:collapse;padding:15px;border:1px #000 solid;text-align:center}'
  headerStyle = headerStyle || 'text-align:center;color:#f00;width:100%;'
  printJS({ printable: tableId, header: headTitle, headerStyle, style, type: 'html', scanStyles: false })
}
