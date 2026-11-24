# Engineering Methodology and Execution Process

Project: Kumar Utkarsh Professional Portfolio and AI Product Architecture Suite
Document: doc/process.md
Version: 5.0.0

## 1. The IMET Governance Framework
Every engineering step and atomic task must follow the strict four-stage cycle:

### Stage I: INPUT
- User requirements, target design guidelines, reference assets, and existing code analysis.
- Identifying exact constraints, file addresses, and scope.
- Zero assumptions: Every requirement is mapped before modification.

### Stage M: MISSION
- Atomic decomposition into discrete, numbered, testable sub-tasks.
- Definition of success criteria and expected outcome for each task.
- Strictly working on one task at a time.

### Stage E: EXECUTE
- High-level execution summary logged with versioning before executing changes.
- Direct code creation or modification at specified file paths.
- Keeping changes minimal, surgical, and robust.

### Stage T: TESTING & VERIFICATION
- Immediate test execution after each task.
- Automated verification: Syntax checks, build execution, responsive measurements, zero-overflow tests.
- If error is found: Halt, diagnose root cause, fix, re-test, confirm green before proceeding to subsequent tasks.

## 2. Version Management and Evolution Protocol
- Existing logs in readme.md and documentation are immutable.
- New modifications append a formal version block (e.g., v5.0.0, v5.1.0).
- Every version entry documents Input, Mission, Execution, and Testing results with hard evidence.

## 3. Keyboard and Character Standards
- Strict prohibition of emojis, em dashes, or special non-standard glyphs not readily available on standard Indian keyboards.
- Standard ASCII dashes (-), hyphens, and standard typography only.
- Dynamic relative file linking only; no machine-specific absolute paths in distributable documentation or code.
