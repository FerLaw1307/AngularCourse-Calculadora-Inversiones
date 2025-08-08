import { NgModule } from "@angular/core";
import { UserIncomeComponent } from "./user-income.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[UserIncomeComponent],
    imports:[FormsModule],
    exports:[UserIncomeComponent]
})

export class IncomeUserModule{}