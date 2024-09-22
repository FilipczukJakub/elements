import {Injectable} from "@angular/core";
import {BehaviorSubject, delay, Observable, of} from "rxjs";
import {ELEMENT_DATA, PeriodicElement} from "../data/Elements";
import {MatTableDataSource} from "@angular/material/table";

@Injectable({
  providedIn: "root"
})
export class ElementsService{
  private elementsSubject =
    new BehaviorSubject<MatTableDataSource<PeriodicElement>>(
      new MatTableDataSource<PeriodicElement>(ELEMENT_DATA))
  elements$: Observable<MatTableDataSource<PeriodicElement>> = this.elementsSubject.asObservable()

  getElements(): Observable<MatTableDataSource<PeriodicElement>>{
    return this.elements$.pipe(
      delay(1000)
    )
  }

  updateElements(index: number, element: PeriodicElement){
    const currentElements = this.elementsSubject.getValue()
    currentElements.data[index] = element;
    this.elementsSubject.next(currentElements);
  }
}
