import {Workbook} from "excel4node";
import {jsonService} from "./json.service";
import {Row} from "../models/row.model";
import config from "../configs/default.config";
import path from "path";

export function createSheet() {
    const workbook: Workbook = new Workbook()
    const date: Date = new Date()
    const fileName: string = `raport_${date.toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' }).split(' ').join('_')}.xlsx`

    Object.keys(jsonService).forEach((key: string): void => {
        jsonService[key] = jsonService[key].sort((aRow: Row, bRow: Row): number => {
            const aArray: number[] = aRow.time.split(':').map((value: string): number => {
                return parseInt(value, 10)
            })
            const bArray: number[] = bRow.time.split(':').map((value: string): number => {
                return parseInt(value, 10)
            })
            const aTimestamp: number = +aArray[0] * 60 * 60 + +aArray[1] * 60 + +aArray[2]
            const bTimestamp: number = +bArray[0] * 60 * 60 + +bArray[1] * 60 + +bArray[2]

            if (aTimestamp < bTimestamp) return -1
            if (aTimestamp > bTimestamp) return 1
            return 0
        })

        const worksheet: Workbook = workbook.addWorksheet(key)
        const formattedData: Row[] = jsonService[key].map((row: Row): Row => {
            return {
                time: row.time,
                operator: row.operator,
                photoURL: `${row.photoURL}_${row.time.split(':').join('_')}`,
                markerURL: `${row.markerURL}${row.long}%2C-${row.lati}`,
                long: row.long,
                lati: row.lati,
            }
        })

        let rowIndex: number = 2
        let headingColumn: number = 1

        config.columnNames.forEach((heading: string): void => worksheet.cell(1, headingColumn++).string(heading))

        formattedData.forEach((record: any): void => {
            let columnIndex: number = 1
            Object.keys(record).forEach((columnName: string): void => {
                if (columnName.endsWith('URL')) {
                    worksheet.cell(rowIndex, columnIndex++).link(record[columnName])
                    return
                }
                switch (typeof record[columnName]) {
                    case 'number': {
                        worksheet.cell(rowIndex, columnIndex++).number(record[columnName])
                        break
                    }
                    default: {
                        worksheet.cell(rowIndex, columnIndex++).string(record[columnName])
                        break
                    }
                }
            })
            rowIndex++
        })
    })

    const filePath: string = path.join(global.__basedir, `../files/reports/${fileName}`)
    workbook.write(filePath)
}