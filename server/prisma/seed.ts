import { PrismaClient, Role, BloodGroup, Gender, AppointmentStatus, AppointmentType } from '../src/generated-client/index.js';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const DEMO_PASSWORD = {
  [Role.ADMIN]: 'Admin@123',
  [Role.DOCTOR]: 'Doctor@123',
  [Role.RECEPTIONIST]: 'Reception@123',
};

function isoDate(y: number, m: number, d: number, h = 9, min = 0): Date {
  return new Date(y, m - 1, d, h, min, 0, 0);
}

async function main() {
  console.log('Seeding database...');

  // Clean existing data (safe for a demo/dev environment)
  await prisma.prescriptionItem.deleteMany();
  await prisma.prescription.deleteMany();
  await prisma.medicalVisit.deleteMany();
  await prisma.appointment.deleteMany();
  await prisma.patient.deleteMany();
  await prisma.user.deleteMany();

  const passwordHash = (role: Role) => bcrypt.hashSync(DEMO_PASSWORD[role], 10);

  const admin = await prisma.user.create({
    data: { name: 'Rajesh Kumar', email: 'admin@ehr.local', passwordHash: passwordHash(Role.ADMIN), role: Role.ADMIN },
  });
  const doctor = await prisma.user.create({
    data: { name: 'Dr. Priya Nair', email: 'doctor@ehr.local', passwordHash: passwordHash(Role.DOCTOR), role: Role.DOCTOR },
  });
  const doctor2 = await prisma.user.create({
    data: { name: 'Dr. Arun Mehta', email: 'doctor2@ehr.local', passwordHash: passwordHash(Role.DOCTOR), role: Role.DOCTOR },
  });
  const receptionist = await prisma.user.create({
    data: { name: 'Meera Iyer', email: 'receptionist@ehr.local', passwordHash: passwordHash(Role.RECEPTIONIST), role: Role.RECEPTIONIST },
  });

  console.log('Users created:', [admin.email, doctor.email, doctor2.email, receptionist.email].join(', '));

  const patientsData = [
    {
      firstName: 'Aathithya', lastName: 'R', dateOfBirth: isoDate(2004, 3, 14), gender: Gender.MALE,
      phone: '9876543210', email: 'aathithya@example.com', address: '12 Gandhi Street, Chennai',
      bloodGroup: BloodGroup.O_POS, allergies: 'Penicillin', existingConditions: 'Mild asthma',
      emergencyContactName: 'Ramanathan', emergencyContactPhone: '9840011223',
    },
    {
      firstName: 'Priya', lastName: 'Sharma', dateOfBirth: isoDate(1995, 8, 22), gender: Gender.FEMALE,
      phone: '9123456789', email: 'priya.sharma@example.com', address: '44 Lake View Road, Coimbatore',
      bloodGroup: BloodGroup.A_POS, allergies: 'None', existingConditions: 'Migraine',
      emergencyContactName: 'Rohan Sharma', emergencyContactPhone: '9880077665',
    },
    {
      firstName: 'Karthik', lastName: 'M', dateOfBirth: isoDate(1980, 1, 5), gender: Gender.MALE,
      phone: '9000123456', email: 'karthik.m@example.com', address: '8 Anna Salai, Madurai',
      bloodGroup: BloodGroup.B_POS, allergies: 'Dust', existingConditions: 'Hypertension, Diabetes type 2',
      emergencyContactName: 'Vidhya', emergencyContactPhone: '9776655443',
    },
    {
      firstName: 'Sneha', lastName: 'Patil', dateOfBirth: isoDate(1998, 11, 30), gender: Gender.FEMALE,
      phone: '9888777666', email: 'sneha.patil@example.com', address: '21 Brigade Road, Bangalore',
      bloodGroup: BloodGroup.AB_NEG, allergies: 'Sulfa drugs', existingConditions: 'Thyroid disorder',
      emergencyContactName: 'Anil Patil', emergencyContactPhone: '9888777555',
    },
    {
      firstName: 'Vikram', lastName: 'Singh', dateOfBirth: isoDate(1975, 6, 17), gender: Gender.MALE,
      phone: '9777666555', email: 'vikram.singh@example.com', address: '33 MG Road, Hyderabad',
      bloodGroup: BloodGroup.O_NEG, allergies: 'None', existingConditions: 'High cholesterol',
      emergencyContactName: 'Kavita Singh', emergencyContactPhone: '9777666444',
    },
    {
      firstName: 'Lakshmi', lastName: 'Narayanan', dateOfBirth: isoDate(1968, 4, 9), gender: Gender.FEMALE,
      phone: '9666555444', email: 'lakshmi.n@example.com', address: '5 Temple Street, Trichy',
      bloodGroup: BloodGroup.A_NEG, allergies: 'Codeine', existingConditions: 'Osteoarthritis',
      emergencyContactName: 'Subramaniam', emergencyContactPhone: '9666555333',
    },
    {
      firstName: 'Mohammed', lastName: 'Faisal', dateOfBirth: isoDate(1990, 9, 25), gender: Gender.MALE,
      phone: '9555444333', email: 'faisal.m@example.com', address: '77 Park Avenue, Calicut',
      bloodGroup: BloodGroup.B_NEG, allergies: 'None', existingConditions: 'None',
      emergencyContactName: 'Rasheed', emergencyContactPhone: '9555444222',
    },
    {
      firstName: 'Divya', lastName: 'Bose', dateOfBirth: isoDate(2000, 2, 11), gender: Gender.FEMALE,
      phone: '9444333222', email: 'divya.bose@example.com', address: '90 Church Road, Kolkata',
      bloodGroup: BloodGroup.AB_POS, allergies: 'Peanuts', existingConditions: 'None',
      emergencyContactName: 'Bose', emergencyContactPhone: '9444333111',
    },
    {
      firstName: 'Rahul', lastName: 'Verma', dateOfBirth: isoDate(1992, 12, 3), gender: Gender.MALE,
      phone: '9333222111', email: 'rahul.verma@example.com', address: '65 Ring Road, Pune',
      bloodGroup: BloodGroup.O_POS, allergies: 'None', existingConditions: 'Seasonal allergies',
      emergencyContactName: 'Sunita Verma', emergencyContactPhone: '9333222000',
    },
  ];

  const patients = [];
  let seq = 1;
  for (const p of patientsData) {
    const record = await prisma.patient.create({
      data: {
        ...p,
        patientId: `EHR-${String(seq++).padStart(6, '0')}`,
      },
    });
    patients.push(record);
  }

  // Visits + prescriptions
  const visit1 = await prisma.medicalVisit.create({
    data: {
      patientId: patients[0].id,
      doctorId: doctor.id,
      visitDate: isoDate(2026, 9, 5),
      chiefComplaint: 'Fever, body ache and weakness for the last 2 days',
      symptoms: 'Temperature 101.4F, chills, generalised body ache, loss of appetite',
      bloodPressure: '118/74',
      heartRate: 96,
      temperature: '38.6',
      weight: '62',
      diagnosis: 'Viral fever',
      treatmentPlan: 'Symptomatic treatment, rest and fluids. Review in 3 days if no improvement.',
      notes: 'Patient is hydrated. Advised complete rest and home isolation.',
    },
  });
  await prisma.prescription.create({
    data: {
      patientId: patients[0].id,
      doctorId: doctor.id,
      visitId: visit1.id,
      notes: 'Take after food.',
      items: {
        create: [
          { medicineName: 'Paracetamol 500mg', dosage: '1 tablet', frequency: '3 times a day', duration: '5 days', instructions: 'After food' },
          { medicineName: 'Vitamin C 200mg', dosage: '1 tablet', frequency: 'Once daily', duration: '7 days', instructions: 'In the morning' },
          { medicineName: 'ORS Sachet', dosage: '1 sachet', frequency: 'As needed', duration: '3 days', instructions: 'Dissolve in 1L water' },
        ],
      },
    },
  });

  const visit2 = await prisma.medicalVisit.create({
    data: {
      patientId: patients[1].id,
      doctorId: doctor.id,
      visitDate: isoDate(2026, 9, 4),
      chiefComplaint: 'Recurring headache with mild dizziness',
      symptoms: 'Throbbing headache on right side, sensitivity to light, nausea',
      bloodPressure: '122/80',
      heartRate: 82,
      temperature: '36.9',
      weight: '55',
      diagnosis: 'Migraine (with aura)',
      treatmentPlan: 'Avoid triggers, stress management, pain relief as needed. Maintain a headache diary.',
      notes: 'Patient reported screen-time related triggers.',
    },
  });
  await prisma.prescription.create({
    data: {
      patientId: patients[1].id,
      doctorId: doctor.id,
      visitId: visit2.id,
      notes: 'Take at onset of headache.',
      items: {
        create: [
          { medicineName: 'Ibuprofen 400mg', dosage: '1 tablet', frequency: '2 times a day', duration: '3 days', instructions: 'After food' },
          { medicineName: 'Sumatriptan 50mg', dosage: '1 tablet', frequency: 'At onset', duration: 'As needed', instructions: 'Do not exceed 2/day' },
        ],
      },
    },
  });

  const visit3 = await prisma.medicalVisit.create({
    data: {
      patientId: patients[2].id,
      doctorId: doctor2.id,
      visitDate: isoDate(2026, 8, 30),
      chiefComplaint: 'Frequent urination and increased thirst',
      symptoms: 'Polyuria, polydipsia, fatigue, mild blurring of vision',
      bloodPressure: '142/92',
      heartRate: 88,
      temperature: '37.1',
      weight: '84',
      diagnosis: 'Type 2 diabetes mellitus (uncontrolled)',
      treatmentPlan: 'Metformin 500mg twice daily, dietary modification, daily exercise. Monitor fasting glucose.',
      notes: 'Referred to endocrinologist for review.',
    },
  });
  await prisma.prescription.create({
    data: {
      patientId: patients[2].id,
      doctorId: doctor2.id,
      visitId: visit3.id,
      notes: 'Long-term medication.',
      items: {
        create: [
          { medicineName: 'Metformin 500mg', dosage: '1 tablet', frequency: 'Twice daily', duration: '30 days', instructions: 'With meals' },
          { medicineName: 'Atorvastatin 10mg', dosage: '1 tablet', frequency: 'Once daily at night', duration: '30 days', instructions: 'Same time daily' },
        ],
      },
    },
  });

  const visit4 = await prisma.medicalVisit.create({
    data: {
      patientId: patients[3].id,
      doctorId: doctor.id,
      visitDate: isoDate(2026, 9, 2),
      chiefComplaint: 'Sore throat and dry cough',
      symptoms: 'Scratchy throat, dry cough, mild fever',
      bloodPressure: '116/72',
      heartRate: 90,
      temperature: '37.8',
      weight: '49',
      diagnosis: 'Acute pharyngitis',
      treatmentPlan: 'Gargles, throat lozenges, warm fluids. Antibiotics if fever persists beyond 48 hrs.',
      notes: 'Viral aetiology likely.',
    },
  });
  await prisma.prescription.create({
    data: {
      patientId: patients[3].id,
      doctorId: doctor.id,
      visitId: visit4.id,
      notes: 'Symptomatic.',
      items: {
        create: [
          { medicineName: 'Benzydamine spray', dosage: '3 sprays', frequency: '3 times a day', duration: '5 days', instructions: 'After food' },
          { medicineName: 'Chlorpheniramine 4mg', dosage: '1 tablet', frequency: 'At bedtime', duration: '5 days', instructions: 'At night' },
        ],
      },
    },
  });

  // Follow-up visit for patient 0
  await prisma.medicalVisit.create({
    data: {
      patientId: patients[0].id,
      doctorId: doctor.id,
      visitDate: isoDate(2026, 8, 20),
      chiefComplaint: 'Routine asthma review',
      symptoms: 'Occasional wheezing on exertion',
      bloodPressure: '115/78',
      heartRate: 84,
      temperature: '36.7',
      weight: '61',
      diagnosis: 'Mild persistent asthma — controlled',
      treatmentPlan: 'Continue salbutamol inhaler as required. Continue inhaled corticosteroid.',
      notes: 'Peak flow stable at 420 L/min.',
    },
  });
  await prisma.prescription.create({
    data: {
      patientId: patients[0].id,
      doctorId: doctor.id,
      visitId: (await prisma.medicalVisit.findFirst({ where: { patientId: patients[0].id }, orderBy: { id: 'desc' } }))!.id,
      notes: 'As required.',
      items: {
        create: [
          { medicineName: 'Salbutamol Inhaler 100mcg', dosage: '2 puffs', frequency: 'As required', duration: '30 days', instructions: 'For wheezing only' },
          { medicineName: 'Budesonide Inhaler 200mcg', dosage: '2 puffs', frequency: 'Twice daily', duration: '30 days', instructions: 'Rinse mouth after use' },
        ],
      },
    },
  });

  // Appointments
  const today = new Date();
  const apptDate = (offsetDays: number) => {
    const d = new Date(today);
    d.setDate(d.getDate() + offsetDays);
    d.setHours(10, 0, 0, 0);
    return d;
  };

  await prisma.appointment.create({
    data: {
      patientId: patients[0].id, doctorId: doctor.id,
      appointmentDate: apptDate(2), time: '10:30', type: AppointmentType.FOLLOW_UP,
      reason: 'Follow-up review after viral fever', status: AppointmentStatus.SCHEDULED,
    },
  });
  await prisma.appointment.create({
    data: {
      patientId: patients[2].id, doctorId: doctor2.id,
      appointmentDate: apptDate(1), time: '09:00', type: AppointmentType.CHECKUP,
      reason: 'Blood sugar review', status: AppointmentStatus.CONFIRMED,
    },
  });
  await prisma.appointment.create({
    data: {
      patientId: patients[4].id, doctorId: doctor2.id,
      appointmentDate: apptDate(3), time: '14:00', type: AppointmentType.CONSULTATION,
      reason: 'Cholesterol check-up', status: AppointmentStatus.SCHEDULED,
    },
  });
  await prisma.appointment.create({
    data: {
      patientId: patients[1].id, doctorId: doctor.id,
      appointmentDate: new Date(new Date(apptDate(-1)).setHours(11, 0, 0, 0)), time: '11:00',
      type: AppointmentType.FOLLOW_UP, reason: 'Migraine follow-up',
      status: AppointmentStatus.COMPLETED,
    },
  });
  await prisma.appointment.create({
    data: {
      patientId: patients[5].id, doctorId: doctor.id,
      appointmentDate: apptDate(5), time: '16:30', type: AppointmentType.CHECKUP,
      reason: 'Joint pain consultation', status: AppointmentStatus.SCHEDULED,
    },
  });
  await prisma.appointment.create({
    data: {
      patientId: patients[7].id, doctorId: doctor2.id,
      appointmentDate: apptDate(4), time: '12:15', type: AppointmentType.EMERGENCY,
      reason: 'Allergic reaction review', status: AppointmentStatus.CANCELLED,
    },
  });

  console.log(`Seeding complete: ${patients.length} patients, visits and prescriptions created.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });