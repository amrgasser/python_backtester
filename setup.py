from setuptools import find_packages, setup

setup(
    name='backtester-app',
    version='1.0.0',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        "flask",
        "flask_sqlalchemy",
        "flask_cors",
        "tensorflow",
        "numpy==1.23.4",
        "keras",
        "pandas",
        "sklearn",
        "pickle",
        "seaborn"
    ],
)
