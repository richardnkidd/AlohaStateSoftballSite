#!/bin/bash
# Simple script to add, commit, and push changes
echo "Adding all changes..."
git add .
echo "Committing changes..."
git commit -m "Auto commit: $(date)"
echo "Pushing to remote..."
git push
echo "Done!"