import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

  result:String='';

  constructor(public matDialog: MatDialog) { }

  openLogoutModal() {
    const userId = "user01";
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = {
      name: "logout",
      title: "Are you sure you want to logout?",
      description: "Pretend this is a convincing argument on why you shouldn't logout :)",
      actionButtonText: "Logout",
      userId: userId
    }
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
    
    modalDialog.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      console.log(this.result);
      
    });
  }

  openDeleteProductModal() {
    const productId = "prod01";
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = {
      name: "deleteProduct",
      title: "Are you sure you want to delete this product?",
      description: "If you continue, the product with ID " + productId + " will be deleted.",
      actionButtonText: "Delete",
      productId: productId
    }
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      console.log(this.result);
      
    });
  }

  ngOnInit(): void {
  }

}
