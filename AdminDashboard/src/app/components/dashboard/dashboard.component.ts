import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  searchQuery: string = '';
constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.fetchData().subscribe(data => {
      this.users = data;
    });
  }
  get displayedUsers(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.users.slice(startIndex, endIndex);
  }

  onTablePageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  }
  onTableSearch(query: string): void {
    this.searchQuery = query;
    this.currentPage = 1; 
  }

}
