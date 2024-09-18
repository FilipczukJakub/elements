import {Component, OnInit} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {ELEMENT_DATA, PeriodicElement} from "../../data/Elements";

@Component({
  selector: 'app-elements-list',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef
  ],
  templateUrl: './elements-list.component.html',
  styleUrl: './elements-list.component.scss'
})
export class ElementsListComponent implements OnInit{
  columns = [
    'number',
    'name',
    'weight',
    'symbol'
  ]
  tableElements: PeriodicElement[] = [];


    ngOnInit(): void {
        this.tableElements = ELEMENT_DATA.map(item=> ({...item}))
      console.error(this.tableElements);
    }

}
