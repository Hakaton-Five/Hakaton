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

    // Hide the button or elements you don't want in the PDF
    const button = element.querySelector('button') as HTMLElement;
    if (button) {
      button.style.display = 'none'; // Temporarily hide the button
    }

    const canvas = await html2canvas(element); // Convert HTML to canvas
    const imgData = canvas.toDataURL('image/png'); // Convert canvas to image
    const pdf = new jsPDF('p', 'mm', 'a4'); // Create a new PDF instance

    const imgWidth = 190; // Width of the image in PDF (adjust as needed)
    const pageHeight = pdf.internal.pageSize.height;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let position = 10; // Starting Y position

    // Add image to PDF
    pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);

    // Show the button again after generating the PDF
    if (button) {
      button.style.display = 'block'; // Restore the button's visibility
    }

    // Save the PDF
    pdf.save(`${this.employee.name}_${this.employee.surname}_Details.pdf`);
  }
}
