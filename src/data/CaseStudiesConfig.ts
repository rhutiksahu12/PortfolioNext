import { CaseStudyMap } from "../types/CaseStudiesTypes";

export const CASE_STUDIES: CaseStudyMap = {
    // ─── 1. Smart Locker Delivery ─────────────────────────────────────────────
    "smart-locker-delivery": {
        title: "Smart Locker Delivery System",
        description:
            "Last-mile delivery infrastructure using automated self-service lockers",
        year: 2024,
        tags: ["Backend", "Node.js", "PostgreSQL", "System Design"],
        github: "https://github.com/example/smart-locker-delivery",
        techStack: [
            "Node.js",
            "Express",
            "PostgreSQL",
            "OTP Verification",
            "Barcode Scanning",
        ],
        sections: [
            {
                heading: "Challenge",
                blocks: [
                    {
                        type: "text",
                        content:
                            "Last-mile delivery is the most expensive and inefficient part of logistics. Customers are often not home during delivery windows, couriers waste time waiting for recipients, and failed deliveries require costly reattempts. Packages left unattended create security risks.",
                    },
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "Customers not home during delivery",
                            "Couriers wasting time waiting for recipients",
                            "Failed deliveries requiring reattempts",
                            "Security risks when packages are left outside",
                        ],
                    },
                ],
            },
            {
                heading: "System Design",
                blocks: [
                    {
                        type: "text",
                        content:
                            "The system solves three core problems: locker resource allocation, secure pickup, and a frictionless delivery workflow for couriers.",
                    },
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "XS - documents",
                            "S - small parcel",
                            "M - medium package",
                            "L - large parcel",
                            "XL - bulky item",
                            "XXL - oversized shipment",
                        ],
                    },
                    {
                        type: "diagram",
                        title: "OTP Pickup Flow",
                        steps: [
                            { label: "Courier places package" },
                            { label: "System generates OTP" },
                            { label: "OTP sent to customer" },
                            { label: "Customer enters OTP at locker" },
                            { label: "Locker opens" },
                        ],
                    },
                    {
                        type: "text",
                        content:
                            "Each locker follows a strict state machine — AVAILABLE → RESERVED → OCCUPIED → MAINTENANCE — controlled via backend APIs to prevent race conditions during concurrent allocation.",
                    },
                ],
            },
            {
                heading: "Implementation",
                blocks: [
                    {
                        type: "code",
                        filename: "locker-allocation.ts",
                        language: "typescript",
                        content: `interface Locker {
  id: string
  size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'
  state: 'AVAILABLE' | 'RESERVED' | 'OCCUPIED' | 'MAINTENANCE'
  volume: number   // cm³
}

interface Parcel {
  id: string
  volume: number
}

// Find smallest available locker that fits the parcel
function allocateLocker(parcel: Parcel, lockers: Locker[]): Locker | null {
  return lockers
    .filter(l => l.state === 'AVAILABLE' && l.volume >= parcel.volume)
    .sort((a, b) => a.volume - b.volume)[0] ?? null
}`,
                    },
                ],
            },
            {
                heading: "Outcome",
                blocks: [
                    {
                        type: "text",
                        content:
                            "The system demonstrated how automated lockers can eliminate failed deliveries, reduce courier wait time, and improve urban delivery efficiency. The allocation algorithm ensured high locker utilization while maintaining fast access for agents.",
                    },
                ],
            },
            {
                heading: "Key Learnings",
                blocks: [
                    {
                        type: "list",
                        ordered: true,
                        items: [
                            "Physical infrastructure requires strong state management systems",
                            "Resource allocation problems appear frequently in logistics systems",
                            "Security flows must account for abuse and OTP replay attempts",
                            "Designing for hardware interaction changes backend assumptions",
                        ],
                    },
                ],
            },
        ],
    },

    // ─── 2. C2C Marketplace ───────────────────────────────────────────────────
    "c2c-marketplace": {
        title: "C2C Used Goods Marketplace",
        description:
            "Broker-free resale platform built around seller trust and verified listings",
        year: 2024,
        tags: ["Product Design", "Node.js", "PostgreSQL", "Fraud Detection"],
        techStack: ["Node.js", "Express", "PostgreSQL", "Prisma", "OTP Auth"],
        sections: [
            {
                heading: "Challenge",
                blocks: [
                    {
                        type: "text",
                        content:
                            "Existing resale platforms like OLX and Facebook Marketplace are heavily polluted with dealers posting bulk listings, fake product photos, and manipulated prices. This breaks buyer trust and makes genuine listings hard to find.",
                    },
                    {
                        type: "callout",
                        variant: "warning",
                        content:
                            "The core insight: the problem isn't lack of listings — it's lack of signal. More listings from dealers makes the platform worse, not better.",
                    },
                ],
            },
            {
                heading: "System Design",
                blocks: [
                    {
                        type: "text",
                        content:
                            "Instead of scaling fast, the product focused on trust-first marketplace design. Accounts are automatically flagged based on dealer behaviour signals:",
                    },
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "High listing frequency in short windows",
                            "Similar product patterns across listings",
                            "Professional product photography",
                            "Repeated category concentration",
                            "Bulk upload behaviour",
                        ],
                    },
                    {
                        type: "code",
                        filename: "dealer-detection.ts",
                        language: "typescript",
                        content: `interface UserSignals {
  listingsLast30Days: number
  categoryConcentration: number   // 0-1, higher = more dealer-like
  avgPhotosPerListing: number
  bulkUploadDetected: boolean
}

type AccountFlag = 'VERIFIED' | 'UNDER_REVIEW' | 'RESTRICTED' | 'BLOCKED'

function computeRiskScore(signals: UserSignals): number {
  let score = 0
  if (signals.listingsLast30Days > 10)  score += 30
  if (signals.categoryConcentration > 0.8) score += 25
  if (signals.avgPhotosPerListing > 8)  score += 20
  if (signals.bulkUploadDetected)       score += 25
  return score
}

function flagAccount(signals: UserSignals): AccountFlag {
  const score = computeRiskScore(signals)
  if (score >= 75) return 'RESTRICTED'
  if (score >= 40) return 'UNDER_REVIEW'
  return 'VERIFIED'
}`,
                    },
                    {
                        type: "text",
                        content:
                            "The platform launched in Hyderabad only — geographic focus made moderation manageable and listing quality measurably higher.",
                    },
                ],
            },
            {
                heading: "Outcome",
                blocks: [
                    {
                        type: "text",
                        content:
                            "Strict onboarding and automated moderation significantly improved marketplace quality — fewer fake listings, higher buyer-seller trust, and negligible broker presence in early data.",
                    },
                ],
            },
            {
                heading: "Key Learnings",
                blocks: [
                    {
                        type: "list",
                        ordered: true,
                        items: [
                            "Marketplaces fail without trust mechanisms built into the product",
                            "Early geographic focus improves quality and makes moderation tractable",
                            "Fraud detection heuristics must evolve continuously as bad actors adapt",
                            "Platform rules must be enforced by product design, not just policy",
                        ],
                    },
                ],
            },
        ],
    },

    // ─── 3. HireFront ────────────────────────────────────────────────────────
    hirefront: {
        title: "HireFront - Job Platform",
        description: "Structured hiring pipelines for recruiters and candidates",
        year: 2024,
        tags: ["Full-Stack", "React", "Node.js", "Product Design"],
        techStack: ["React", "Node.js", "Express", "PostgreSQL"],
        sections: [
            {
                heading: "Challenge",
                blocks: [
                    {
                        type: "text",
                        content:
                            "Most job platforms overwhelm recruiters with unfiltered applications and disorganised candidate tracking. Hiring becomes inefficient when there is no structured way to see where each candidate stands.",
                    },
                ],
            },
            {
                heading: "System Design",
                blocks: [
                    {
                        type: "callout",
                        variant: "info",
                        content:
                            "Core product insight: hiring should behave like a workflow system, not just a job board.",
                    },
                    {
                        type: "diagram",
                        title: "Hiring Pipeline Stages",
                        steps: [
                            { label: "Applied" },
                            { label: "Screening" },
                            { label: "Interview" },
                            { label: "Offer" },
                            { label: "Rejected" },
                        ],
                    },
                    {
                        type: "text",
                        content:
                            "The data model links companies, jobs, applications, candidates, and pipeline stages relationally — enabling efficient recruiter dashboard queries without N+1 problems.",
                    },
                    {
                        type: "code",
                        filename: "schema.sql",
                        language: "sql",
                        content: `-- Core relational model
CREATE TABLE pipeline_stages (
  id          SERIAL PRIMARY KEY,
  job_id      INT REFERENCES jobs(id),
  name        TEXT NOT NULL,
  position    INT NOT NULL,           -- order in pipeline
  UNIQUE (job_id, position)
);

CREATE TABLE applications (
  id          SERIAL PRIMARY KEY,
  job_id      INT REFERENCES jobs(id),
  candidate_id INT REFERENCES candidates(id),
  stage_id    INT REFERENCES pipeline_stages(id),
  applied_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Efficient recruiter dashboard query
SELECT a.id, c.name, ps.name AS stage
FROM   applications a
JOIN   candidates c ON c.id = a.candidate_id
JOIN   pipeline_stages ps ON ps.id = a.stage_id
WHERE  a.job_id = $1
ORDER  BY ps.position, a.applied_at;`,
                    },
                ],
            },
            {
                heading: "Outcome",
                blocks: [
                    {
                        type: "text",
                        content:
                            "HireFront gave recruiters a clear visual pipeline instead of a flat inbox, improving candidate management and reducing decision fatigue.",
                    },
                ],
            },
            {
                heading: "Key Learnings",
                blocks: [
                    {
                        type: "list",
                        ordered: true,
                        items: [
                            "Hiring platforms are fundamentally workflow management systems",
                            "Recruiter UX is the primary driver of platform adoption",
                            "Structured pipelines simplify decision-making under volume",
                        ],
                    },
                ],
            },
        ],
    },

    // ─── 4. Quick Commerce Warehouse ─────────────────────────────────────────
    "warehouse-picking": {
        title: "Quick Commerce Inventory & Picking",
        description:
            "Warehouse fulfillment system optimised for rapid order picking",
        year: 2024,
        tags: ["Backend", "Node.js", "PostgreSQL", "Hardware Integration"],
        techStack: ["Node.js", "Express", "PostgreSQL", "Barcode Scanners"],
        sections: [
            {
                heading: "Challenge",
                blocks: [
                    {
                        type: "text",
                        content:
                            "Quick commerce fulfillment centers must process orders in minutes, not hours. Locating products quickly, minimising picking errors, and handling multiple simultaneous orders are all competing constraints.",
                    },
                ],
            },
            {
                heading: "System Design",
                blocks: [
                    {
                        type: "callout",
                        variant: "info",
                        content:
                            "Warehouse operations are navigation problems. The system focused on structured shelf location modelling and deterministic picking routes.",
                    },
                    {
                        type: "text",
                        content:
                            "Every product location follows a deterministic format: Lane → Shelf → Row (e.g. B-12-03). Pickers move through shelves sequentially, minimising backtracking.",
                    },
                    {
                        type: "diagram",
                        title: "Multi-Order Pick Flow",
                        steps: [
                            { label: "Order received" },
                            {
                                label: "Pick list generated",
                                sublabel: "sorted by shelf location",
                            },
                            { label: "Picker follows shelf order" },
                            { label: "Products scanned via barcode" },
                            {
                                label: "Items placed into order bag",
                                sublabel: "unique bag ID per order",
                            },
                        ],
                    },
                    {
                        type: "code",
                        filename: "pick-list.ts",
                        language: "typescript",
                        content: `interface ShelfLocation {
  lane: string    // e.g. "B"
  shelf: number   // e.g. 12
  row: number     // e.g. 3
}

interface PickItem {
  productId: string
  location: ShelfLocation
  quantity: number
  bagId: string
}

// Sort pick list by physical shelf order to minimise picker travel
function sortPickList(items: PickItem[]): PickItem[] {
  return [...items].sort((a, b) => {
    const locA = a.location
    const locB = b.location
    if (locA.lane !== locB.lane) return locA.lane.localeCompare(locB.lane)
    if (locA.shelf !== locB.shelf) return locA.shelf - locB.shelf
    return locA.row - locB.row
  })
}`,
                    },
                ],
            },
            {
                heading: "Outcome",
                blocks: [
                    {
                        type: "metrics",
                        items: [
                            {
                                label: "Picking errors",
                                value: "Near zero",
                                delta: "↓ via barcode verify",
                            },
                            {
                                label: "Warehouse navigation",
                                value: "Deterministic",
                                delta: "↑ route efficiency",
                            },
                            {
                                label: "Simultaneous orders",
                                value: "Multi-order",
                                delta: "↑ picker throughput",
                            },
                        ],
                    },
                ],
            },
            {
                heading: "Key Learnings",
                blocks: [
                    {
                        type: "list",
                        ordered: true,
                        items: [
                            "Warehouse efficiency depends heavily on location modelling upfront",
                            "Barcode systems dramatically reduce picking mistakes at low cost",
                            "Fulfillment systems must optimise for human movement patterns, not just data flow",
                        ],
                    },
                ],
            },
        ],
    },
};