# Physio Academy LMS

A learning management system for physiotherapy and fitness education teams. Trainers enroll in structured programs, work through video and presentation lessons, pass certification evaluations, and download verifiable certificates. Administrators manage programs, approve users, and track progress across branches.

> This is a portfolio demonstration built with fully fictional, demo data. "Physio Academy", its brands, branches, and programs are invented and are not affiliated with any real organization.

## Problem

Multi-branch fitness and rehabilitation teams need consistent staff education, but training is often scattered across PDFs, chat groups, and in-person sessions. There is no single place to publish a curriculum, confirm who completed what, and issue a credential that a manager can trust.

## Who it is for

- **Trainers and clinical staff** who need to complete required programs and earn certifications.
- **Education and operations leads** who publish programs and need visibility into completion across branches.

## Features

- **Programs, modules, and lessons** with video and slide-presentation players.
- **Certification evaluations** (quizzes) with a prerequisite gate before advanced modules.
- **Certificates** generated in the browser, with a unique certificate number and a downloadable view.
- **Progress tracking** per user, module, and program.
- **Admin area** to create and order programs, manage lessons, approve users, and view analytics.
- **Branch-aware structure** so completion can be viewed across a multi-brand group.

## Roles and access

- **Trainer** (default): enrolls in programs, completes lessons and evaluations, earns certificates.
- **Admin**: manages programs, users, and analytics.
- **Approval gate**: new accounts start unapproved and cannot access the app until an admin approves them.

## Tech stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Backend and auth:** Supabase (PostgreSQL, Auth, Row Level Security)
- **UI:** Tailwind CSS
- **PDF/certificates:** browser-generated

## Getting started

Requires Node.js 18+ and a Supabase project.

```bash
# 1. Install
npm install

# 2. Configure
cp .env.example .env.local
# Fill in your Supabase URL, anon key, and service role key

# 3. Run
npm run dev
# Open http://localhost:3000
```

You will need a Supabase schema with `profiles`, `programs`, `modules`, `lessons`, `quizzes`, `enrollments`, `certificates` and related tables, plus Row Level Security policies. The approval flow expects an `is_approved` flag on `profiles`.

## Privacy and data

- Access is gated by Supabase Auth plus an admin approval step.
- All names, branches, programs, and users in this demo are synthetic.
- Do not load real staff or learner data without adding appropriate consent, access controls, audit logging, and applicable data-protection compliance.

## Status

Functional. Built end to end (auth, programs, lessons, evaluations, certificates, admin, analytics) and generalized from a private build into this public demo.

## Limitations

- The schema and Row Level Security policies are expected to exist in your own Supabase project; this repository ships the application code, not a seed database.
- Certificate generation is a presentation feature and does not constitute an accredited qualification.
- Analytics are illustrative and depend on the data in your own project.

## Author

Built by **Víctor Andrés Gómez López**. Based in Riyadh, Víctor works as a Personal Trainer and supports the implementation, integration, and consistent delivery of physiotherapy services across three fitness clubs. He is also a doctoral researcher and founder of [ADAPTY](https://adapty.global), building human-supervised health-data and decision-support prototypes.

- Portfolio: [victor-gomez-portfolio.vercel.app](https://victor-gomez-portfolio.vercel.app)
- LinkedIn: [linkedin.com/in/victorgomezadapty](https://www.linkedin.com/in/victorgomezadapty)
