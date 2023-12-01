// dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

import { TableComponent } from '../table/table.component';


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
    this.currentPage = 1; // Reset to the first page when searching
  }

  private filterUsers(): any[] {
    // Implement your filtering logic based on this.searchQuery
    // Return the filtered users array
    return this.users;
  }
}
