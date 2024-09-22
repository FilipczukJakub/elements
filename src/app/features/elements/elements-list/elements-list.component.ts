import {Component, OnInit, ViewChild} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {PeriodicElement} from "../../data/Elements";
import {MatDialog} from "@angular/material/dialog";
import {ElementEditDialogComponent} from "../element-edit-dialog/element-edit-dialog.component";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {delay, map, Observable} from "rxjs";
import {FormsModule} from "@angular/forms";
import {ElementsService} from "../../services/elements.service";
import {AsyncPipe, NgIf} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

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
    MatRowDef,
    MatFormField,
    MatInput,
    MatSuffix,
    MatIconButton,
    MatIcon,
    MatLabel,
    FormsModule,
    NgIf,
    AsyncPipe,
    MatProgressSpinner,
  ],
  templateUrl: './elements-list.component.html',
  styleUrl: './elements-list.component.scss'
})
export class ElementsListComponent implements OnInit{
  @ViewChild('dataTable') dataTable!: MatTable<PeriodicElement>;
  columns = [
    'number',
    'name',
    'weight',
    'symbol'
  ]
  tableElements$!: Observable<MatTableDataSource<PeriodicElement>>;
  searchString!: string;


  constructor(
    private dialog: MatDialog,
    private elementService: ElementsService
  ) {
  }

  ngOnInit(): void {
    this.getElements()
  }

  getElements():void {
    this.tableElements$ = this.elementService.getElements();

  }

  openDialog(element: any,field: string): void{
    const dialogRef = this.dialog.open(ElementEditDialogComponent,{
      data: {
        value: element[field as keyof PeriodicElement]
      }

    });

    dialogRef.afterClosed().subscribe( (res: number | string) => {
      if(res){
          this.tableElements$.subscribe(elements => {
            let index = elements.data.indexOf(element);
            if(index > -1){
              elements.data[index] = {...element, [field]: res};
              let newElement = {...element, [field]: res}
              this.elementService.updateElements(index,newElement);
              this.getElements()
            }
          })
      }
    })
  }

  search(timeOut: number){
    setTimeout(() => {
      this.tableElements$.subscribe(elements => {
        elements.filter = this.searchString
      })
      },
      timeOut
    )
  }
}
