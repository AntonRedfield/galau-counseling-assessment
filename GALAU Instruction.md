# ROLE
You are a senior full-stack engineer and UX designer experienced in education technology and sensitive health-related data. Build a production-ready web application called **GALAU**.

# PRODUCT
**GALAU = Guidance, Assessment of Life-distress, Anxiety & Utility**
A Counseling & Student Guidance Center that uses standardized self-assessments (DASS-42 and DCM) to proactively support student psychological well-being and track counseling progress. Students complete assessments themselves; counselors review results, triage risk, and record follow-up actions.

**UI language: Bahasa Indonesia** (all labels, messages, assessment items, reports). Code, comments, and database names in English.

# USERS & ROLES
1. **Student (Siswa/Konseli):** logs in, completes assessments, sees a gentle summary of their own results, views upcoming counseling schedule.
2. **Counselor (Guru BK/Konselor):** sees assigned students, results, risk flags, records follow-up, exports reports.
3. **Admin:** manages users, classes, school data, item banks, crisis-contact settings, audit log.
(Optional: **Principal/Kepala Sekolah** read-only, aggregated and anonymized dashboards only.)

# CORE FEATURES

## 1. Assessment A: DASS-42
- 42 items, each rated 0–3 (0 = Tidak sesuai dengan saya sama sekali, 1 = Sesuai pada tingkat tertentu/kadang-kadang, 2 = Sesuai pada tingkat yang cukup besar/sering, 3 = Sangat sesuai/hampir setiap saat). Timeframe: "selama seminggu terakhir".
- Three subscales, 14 items each (verify against the official Indonesian DASS-42 before shipping):
  - Depression: items 3,5,10,13,16,17,21,24,26,31,34,37,38,42
  - Anxiety: items 2,4,7,9,15,19,20,23,25,28,30,36,40,41
  - Stress: items 1,6,8,11,12,14,18,22,27,29,32,33,35,39
- Scoring: sum per subscale (DASS-42 is NOT doubled). Severity cutoffs (Lovibond & Lovibond):
  - Depression: Normal 0–9, Mild 10–13, Moderate 14–20, Severe 21–27, Extremely Severe 28+
  - Anxiety: Normal 0–7, Mild 8–9, Moderate 10–14, Severe 15–19, Extremely Severe 20+
  - Stress: Normal 0–14, Mild 15–18, Moderate 19–25, Severe 26–33, Extremely Severe 34+
- Store cutoffs and item-to-scale mapping in configurable tables, not hardcoded.
- Auto-generate lists/filters: "Siswa Depresi Sangat Parah", "Siswa Kecemasan Parah", "Siswa Stres Parah", etc. (Severe + Extremely Severe, per subscale).

## 2. Assessment B: DCM (Daftar Cek Masalah), 51 items
- Student checks the items that apply to them (binary checklist).
- Items are mapped to domains (store as seed data in an editable item bank; I will supply the exact item wording, so create a seed file/import CSV with placeholders `item_no, text, domain`):
  - Nilai Spiritual/Moral: 1–6
  - Sosial & Interpersonal: 7–9, 18–20, 35–37
  - Akademik & Belajar: 11, 13, 15, 16
  - Perkembangan Psikoseksual & Fisik: 21–25
  - Karier & Kemandirian Masa Depan: 26–34
  - Dinamika Keluarga: 38–42
  - Darurat Kesehatan Mental & Trauma (EMERGENCY): 45–51 (seeing unseen figures, self-harm, suicidal thoughts, severe addiction to gaming/pornography, uncontrollable anger, severe trauma)
  - Note: some item numbers (10, 12, 14, 17, 43, 44) are not mapped in my source. Make domain assignment editable by Admin and flag unmapped items for me to resolve.
- Per student: count of checked items per domain, plus the list of checked items.
- **Analisis Kelompok DCM:** aggregate per class/grade/school to find groups of students sharing the same checked item(s), used to suggest group counseling.

## 3. Risk Triage Engine
- Any checked item in the Emergency domain (45–51), especially self-harm/suicidal thoughts, OR any DASS subscale at "Extremely Severe" → **CRITICAL flag**: immediate in-app and email/WhatsApp-ready notification to the assigned counselor, top of dashboard, requires acknowledgment and logged response time.
- DASS "Severe" or multiple Moderate → **HIGH**; Moderate → **WATCH**; otherwise **NORMAL**.
- Rules must be configurable and transparent (show *why* a student was flagged).

## 4. Tiered Intervention & Follow-up Tracking
Counselor records one or more actions per student, each with date, notes (private), status, and outcome:
- **Konseling Individu**
- **Konseling Kelompok** (create a group from DCM group analysis; attendance and session notes)
- **Home Visit** (triggered by Family Dynamics domain; includes parent contact log and visit notes)
- **Referral** (triggered by Emergency items or DASS Extremely Severe; capture destination psychologist/psychiatrist/facility, referral letter template exportable to PDF, status tracking)
- Suggested-action hints based on results, but the counselor decides.

## 5. Progress Tracking
- Allow repeated assessments over time (e.g., per semester/month). Show a per-student timeline: DASS scores per subscale over time, DCM changes, and linked counseling sessions.
- Before/after comparison to measure intervention effectiveness.

## 6. Profile & Reports
- **Profil Pribadi Konseli:** one page per student combining demographics, DASS result, DCM result, risk level, intervention history. Exportable to PDF and Excel ("Form Export_ Profil Pribadi Konseli").
- Class/school dashboards: distribution by severity, top DCM problem domains, trends. Aggregates must hide groups smaller than 5 students for non-counselor roles.
- Bulk export (CSV/XLSX) of results for counselors.

# STUDENT EXPERIENCE (important)
- Calm, friendly, non-clinical tone. Mobile-first, big tap targets, one question (or a few) per screen, progress bar, save-and-resume.
- Before starting: short consent and explanation (who sees the results, why, that this is a screening and not a diagnosis, that they can ask for help anytime).
- After submitting: supportive, non-alarming summary. Do NOT show harsh labels or raw "Extremely Severe" wording to the student; use gentle language and an encouraging next step. If emergency items were checked, show a caring message, a visible "talk to someone now" panel with school counselor contact and configurable crisis hotline numbers (Admin-editable; do not hardcode unverified numbers).
- Accessible: readable fonts, good contrast, works on low-end phones and slow connections (lightweight bundle, minimal assets; consider PWA with offline-tolerant answer saving).

# PRIVACY, SAFETY & COMPLIANCE
- This is sensitive data about minors. Follow Indonesia's UU PDP (Personal Data Protection) principles: informed consent (with parent/guardian consent flow where required by the school), data minimization, purpose limitation, retention policy (configurable), right to access/deletion request flow.
- Role-based access control. Counselors see only their assigned students; Admin cannot read counseling notes. Principal sees aggregates only.
- Encrypt data in transit and at rest; encrypt counseling notes at the field level.
- Full audit log of who viewed or edited any student's results.
- Display a clear disclaimer: results are screening indicators, not diagnoses; clinical decisions belong to qualified professionals.
- Never let the app auto-message parents or third parties about results; any such outreach is a deliberate counselor action.

# TECH STACK (adjust only with justification)
- Frontend: React + TypeScript (Next.js), Tailwind CSS, accessible component library.
- Backend: Next.js API routes or Node/NestJS; PostgreSQL with Prisma (or Supabase with Row-Level Security).
- Auth: email/NIS + password, optional magic link; session security, rate limiting, password reset.
- Charts: Recharts. PDF export: server-side. Excel export: SheetJS.
- Seed data: sample school, classes, 1 admin, 2 counselors, ~30 fake students with varied results (clearly fake data).

# DATA MODEL (starting point)
users, roles, schools, classes, students, counselor_assignments, assessment_types, dass_items, dcm_items, dcm_domains, assessment_sessions, dass_responses, dcm_responses, scoring_rules, risk_flags, interventions (type: individual/group/home_visit/referral), counseling_sessions, groups, group_members, referrals, notifications, audit_logs, consent_records.

# DELIVERABLES
1. Short architecture summary and DB schema before coding.
2. Working app with the features above, in phased milestones:
   - Phase 1: auth, roles, student/class management, DASS-42 + scoring
   - Phase 2: DCM + domain mapping + group analysis
   - Phase 3: risk engine, notifications, interventions & referral workflow
   - Phase 4: progress timelines, dashboards, exports, audit log
3. Unit tests for scoring and risk rules (include edge cases at each cutoff boundary).
4. README with setup, env vars, seeding, deployment steps, and a list of assumptions and open questions.
5. At the end, list anything that needs my verification (item wording, mappings, cutoffs, crisis contacts, legal text).

# WORKING RULES
- Ask me before assuming anything ambiguous that affects scoring or safety; otherwise proceed and document assumptions.
- Do not invent clinical content. Where official item wording is needed, use placeholders and an import mechanism.
- Prioritize correctness of scoring and safety of the critical-flag path over visual polish.