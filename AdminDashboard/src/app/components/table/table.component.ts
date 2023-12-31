import {  Component, Input, Output, EventEmitter } from '@angular/core';
interface Row {
  isSelected: boolean;
 
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() users: any[] = [];
  @Input() totalItems: number = 0; 
  @Input() itemsPerPage: number = 10; 
  @Input() currentPage: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  @Output() searchChange: EventEmitter<string> = new EventEmitter();
  filteredUsers: any[] = [];
  searchQuery: string = '';
  displayedRows: Row[] = [];
  editingName: { [key: number]: boolean } = {};
  editingEmail: { [key: number]: boolean } = {};
  
  isEditing: { [key: string]: boolean } = {};
  isEditingName: { [key: number]: boolean } = {};
isEditingEmail: { [key: number]: boolean } = {};


editUser(user: any, field: string): void {
  if (field === 'Name') {
    this.isEditingName[user.id] = !this.isEditingName[user.id];
  } else if (field === 'Email') {
    this.isEditingEmail[user.id] = !this.isEditingEmail[user.id];
  }
}
  deleteUser(user: any) {
   
    console.log('Deleting user:', user);
  }
  onPageChange(pageNumber: number): void {
    this.pageChange.emit(pageNumber);
  }
  onSearch() {
    
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  clearSearch() {
    this.searchQuery = '';
    this.filteredUsers = [...this.users];
  }
  selectAllRows(event: any): void {
    const isChecked = event.target.checked;
    this.users.forEach((user) => (user.isSelected = isChecked));
  }
  selectRow(row: Row): void {
  
  }
  deleteSelectedRows() {
    const selectedRows = this.users.filter(user => user.isSelected);
    console.log('Deleting selected rows:', selectedRows);
  }
 

}
