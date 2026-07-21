# DataPulse: Reproducible Python Analysis Setup

> **Technical project** · Python · Pandas · NumPy · Matplotlib · OpenPyXL

## Project objective

Create a reliable local Python environment for data analysis, verify the required packages and establish a clean structure for reusable scripts.

## Workflow

1. Created and activated a project-specific virtual environment.
2. Installed the analytical dependencies into that environment.
3. Used a verification script to confirm package availability.
4. Kept project dependencies in `requirements.txt`.
5. Separated environment validation from analysis code.
6. Tracked the project with Git for reproducibility and version history.

## Challenge addressed

Packages can be installed in a global Python environment while the project runs through a different virtual-environment interpreter. The project reinforced the importance of checking the active interpreter and installing dependencies in the same environment used to run the scripts.

## Technical outcome

The result was a reproducible foundation for future data-cleaning, analysis and visualisation work.

## Recommended repository structure

```text
datapulse-analysis/
├── README.md
├── analysis.py
├── verify.py
├── requirements.txt
├── data/
└── outputs/
```

## Next development step

Extend the repository with a documented exploratory analysis, charts saved to `outputs/`, data-quality checks and a concise findings section.

## Project credit

Individual technical learning project developed as part of data analytics practice.

[← Back to portfolio](../../README.md)

