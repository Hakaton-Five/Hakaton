import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USERS } from '../../core/mock/users';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class EmployersComponent implements OnInit {
  employeeId: number | null = null;
  employee: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.employeeId = Number(params.get('id'));
      if (this.employeeId) {
        this.employee = USERS.find((user) => user.id === this.employeeId);
        console.log(this.employee);
      }
    });
  }

  async generatePDF(): Promise<void> {
    const element = document.getElementById('employee-details');
    if (!element) {
      console.error('Employee details element not found!');
      return;
    }

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');

    const imgWidth = 190;
    const pageHeight = pdf.internal.pageSize.height;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let position = 10;

    pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);

    pdf.save(`${this.employee.name}_${this.employee.surname}_Details.pdf`);
  }
}
