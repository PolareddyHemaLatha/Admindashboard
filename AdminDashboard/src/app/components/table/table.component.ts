import {  Component, Input, Output, EventEmitter } from '@angular/core';
interface Row {
  isSelected: boolean;
  // Add other properties for your row data
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
  
  editUser(user: any) {
    // Implement logic for editing a user
    console.log('Editing user:', user);
  }

  deleteUser(user: any) {
    // Implement logic for deleting a user
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
    // Handle individual row selection
  }
  private applySearch(query: string): void {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  }

}
